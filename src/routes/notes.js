const express = require("express");
const router = express.Router();
const { validateNoteArray } = require("../utils/validators");
const Note = require("../models/noteSchema");

/* ------------------------ TODO-3 - Fetch All Notes ------------------------ */
router.get("/getAllNotes", async (req, res) => {
  console.log(
    `[GET] http://localhost:${global.port}/notes - Fetching all notes`
  );
  try {
    const notes = await Note.find({});
    if (!validateNoteArray(notes)) {
      return res.status(500).send("Invalid data type");
    }
    if (notes.length === 0) {
      return res.send("There are no notes to display.");
    }
    res.send({ notes });
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).send("Failed to fetch notes");
  }

  /* 
    TODO-3:
      Fetch all notes from the database
      Return an array of note objects

      Your return object should be something similar to this:
        [{ id, text, dateCreated, lastModified }]
  */

  /*

    // Your code here...

    const notes = [] // this is the response object, make sure to replace with actual value



    // Upon succ, run the following lines to validate the response object and respond to client

    // --- begin of succ flow ---
    if (!validateNoteArray(notes)) {
      res.status(500).send('Invalid data type')
    }
    res.send({ notes })
    // --- end of succ flow ---



    // Upon fail, run the following line to respond with an error

    // --- begin of fail flow ---
    res.status(500).send('Fail to query')
    // --- end of fail flow ---
    
  */

  // TODO-3.1: Remove this section once you start working on TODO-3
  // --- Remove section begins ---
  // const notes = [
  //   {
  //     id: 11,
  //     text: "This is dummy note from fetch all!",
  //     dateCreated: "2021-04-15",
  //     lastModified: "2021-04-17",
  //   },
  //   {
  //     id: 12,
  //     text: "This is another dummy note from fetch all!",
  //     dateCreated: "2021-09-15",
  //     lastModified: "2021-10-17",
  //   },
  // ];
  // if (!validateNoteArray(notes)) {
  //   res.status(500).send("Invalid data type");
  // }
  // res.send({ notes });
  // --- Remove section ends ---
});
/* -------------------------------------------------------------------------- */

/* ------------------------- TODO-7 - Search Notes -------------------------- */
router.get("/search/:searchKey", async (req, res) => {
  console.log(
    `[GET] http://localhost:${global.port}/notes/search - Searching notes`
  );

  /*
    TODO-7:
      Given a search key
      Fetch all notes from the database that contains the search key in the note content
      Return an array of matching note objects

      Search key is sotred in variable searchKey

      Your notes object should be something similar to this:
        [{ id, text, dateCreated, lastModified }]
  */
  const searchKey = req.params.searchKey;
  console.log(searchKey);

  try {
    const notes = await Note.find({
      text: { $regex: searchKey, $options: "i" },
    });
    if (!validateNoteArray(notes)) {
      return res.status(500).send("Invalid data type");
    }
    if (notes.length === 0) {
      return res.send("No matching notes found.");
    }
    res.send({ notes });
  } catch (error) {
    console.error("Error searching notes:", error);
    res.status(500).send("Failed to search notes");
  }
  /*

    // Your code here...

    const notes = [] // this is the response object, make sure to replace with actual value


    // Upon succ, run the following lines to validate the response object and respond to client

    // --- begin of succ flow ---
    if (!validateNoteArray(notes)) {
      res.status(500).send('Invalid data type')
    }
    res.send({ notes })
    // --- end of succ flow ---



    // Upon fail, run the following line to response with error

    // --- begin of fail flow ---
    res.status(500).send('Fail to query')
    // --- end of fail flow ---
    
  */

  // TODO-7.1: Remove this line once you start working on TODO-7
  // --- Remove section begins ---
  // const notes = [
  //   {
  //     id: 5,
  //     text: `This is a dummy note from search contains search key ${searchKey}!`,
  //     dateCreated: "2021-04-15",
  //     lastModified: "2021-04-17",
  //   },
  // ];
  // if (!validateNoteArray(notes)) {
  //   res.status(500).send("Invalid data type");
  // }
  // res.send({ notes });
  // --- Remove section ends ---
});
/* -------------------------------------------------------------------------- */

/* ----------------------- TODO-8 - Delete All Notes ------------------------ */
router.delete("/deleteAllNotes", async (req, res) => {
  console.log(
    `[DELETE] http://localhost:${global.port}/notes - Deleting all notes`
  );

  try {
    const notesCount = await Note.countDocuments({});
    if (notesCount === 0) {
      return res.send({ message: "There are no notes to delete." });
    }
    await Note.deleteMany({});
    res.send({ message: "All notes deleted successfully" });
  } catch (error) {
    console.error("Error deleting all notes:", error);
    res.status(500).send("Failed to delete all notes");
  }

  /*
    TODO-8:
      Delete all notes from the database
  */

  /*

    // Your code here...



    // Upon succ, run the following lines to validate the response object and reponse to client

    // --- begin of succ flow ---
    res.send()
    // --- end of succ flow ---



    // Upon fail, run the following line to respond with an error

    // --- begin of fail flow ---
    res.status(500).send('Fail to delete')
    // --- end of fail flow ---

  */

  // TODO-8.1: Remove this section once you start working on TODO-8
  // --- Remove section begins ---
  // res.send();
  // --- Remove section ends ---
});
/* -------------------------------------------------------------------------- */

module.exports = router;
