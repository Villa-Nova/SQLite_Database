const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class NotesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body;
    const { user_id } = request.params;

    if( rating < 0 || rating > 5) {
      throw new AppError("Rating is only valid from 0 to 5");
    };

    const note_id = await knex("notes").insert({
      title,
      description,
      rating,
      user_id
    });

    const tagsInsert = await tags.map(name => {
      return {
        note_id,
        user_id,
        name
      };
    });
    await knex("tags").insert(tagsInsert);

    response.status(201).json({
      message: "New note created",
    });
  };

  async show(request, response) {
    const { id } = request.params;

    const notesShow = await knex("notes").where({ id });

    const tagsShow = await knex("tags").where({ note_id: id });

    response.json({
      ...notesShow,
      tagsShow
    });
  };

  async index(request, response) {
    const { user_id, tags, title } = request.query;

    let notes; 

    if( tags ) {
      const filterTags = tags.split(',')
        .map(tag => tag.trim());

      notes = await knex("tags")
      .select([
        "notes.id",
        "notes.user_id",
        "notes.title",
        "notes.description",
        "notes.rating"
      ])
      .where("notes.user_id", user_id)
      .whereIn("name", filterTags)
      .innerJoin("notes", "notes.id", "tags.note_id")
      .orderBy("notes.title");

    } else {

      notes = await knex("notes")
      .where({ user_id })
      .whereLike("title", `%${title}%`)
      .orderBy("title");
    };

    const userTags = await knex("tags").where({ user_id });
    const notesWithTags = notes.map(note => {
      const noteTags = userTags.filter(tag => tag.note_id === note.id);

      return {
        ...note,
        tags: noteTags
      };
    });

    return response.json( notesWithTags );
  };

  async delete(request, response) {
    const { id } = request.params;

    await knex("notes").where({ id }).delete();

    response.json({ message: "Note deleted" });
  };
};

module.exports = NotesController;