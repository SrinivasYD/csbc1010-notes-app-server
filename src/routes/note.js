const express = require('express')
const router = express.Router()
const { validateNote } = require('../utils/validators')

/* ------------------------ TODO 2 - Create New Note ------------------------ */
router.post('/', (req, res) => {
  console.log(`[POST] http://localhost:${global.port}/note - Storing a new note`)

  /*
  	TODO-2:
  		Given node content
  		Create a new node and store the node to database,
  		Return the newly created note object

  		Note content is stored in variable newText

  		Your note object should be something similiar to this:
      	[{ id, text, dateCreated, lastModified }]
  */
  const newText = req.body.text

  /*

    Your code here...

    const newNote = {} // this is the response object, make sure to replace with actual value



    // Upon succ, run the following lines to validate the response object and respond to client

    // --- begin of succ flow ---
    if (!validateNote(newNote)) {
      res.status(500).send('Invalid data type')
    }
	  res.status(201).send({ newNote })
    // --- end of succ flow ---



    // Upon fail, run the following lines to respond with an error

    // --- begin of fail flow ---
    res.status(500).send('Fail to insert')
    // --- end of fail flow ---
    
  */



  // TODO-2.1: Remove this section once you start working on TODO-2
  // --- Remove section begins ---
  const newNote = { id: 2, text: newText, dateCreated: new Date().toISOString().split('T')[0], lastModified: new Date().toISOString().split('T')[0] }
  if (!validateNote(newNote)) {
    res.status(500).send('Invalid data type')
  }
  res.status(201).send({ newNote })
  // --- Remove section ends ---
})
/* -------------------------------------------------------------------------- */

/* ------------------------- TODO 3 - Update A Note ------------------------- */
router.put('/', (req, res) => {
  console.log(`[PUT] http://localhost:${global.port}/note - Updating note`)

  /*
		TODO-3:
			Given note id and content
			Update the note's content with its id in database
			Return the updated note object

			Note id is stored in variable noteId
			Note content is stored in varibale newText

			Your note object should be something similiar to this:
        [{ id, text, dateCreated, lastModified }]
	*/
	const noteId = req.body.id
	const newText = req.body.text

	/* 

		// You code here...

		const updatedNote = {} // this is the response object, make sure to replace with actual value



    // Upon succ, run the following lines to validate the response object and respond to client

    // --- begin of succ flow ---
    if (!validateNote(updatedNote)) {
      res.status(500).send('Invalid data type')
    }
	  res.send({ updatedNote })
    // --- end of succ flow ---



    // Upon fail, run the following lines to respond with an error

    // --- begin of fail flow ---
    res.status(500).send('Fail to update')
    // --- end of fail flow ---

	*/



		// TODO-3.1: Remove this section once you start working on TODO-3
  	// --- Remove section begins ---
  	const updatedNote = { id: noteId, text: newText, dateCreated: '2021-04-15', lastModified: new Date().toISOString().split('T')[0]}
		if (!validateNote(updatedNote)) {
      res.status(500).send('Invalid data type')
    }
  	res.send({ updatedNote })
  	// --- Remove section ends ---
})
/* -------------------------------------------------------------------------- */

/* ------------------------- TODO 4 - Delete A Note ------------------------- */
router.delete('/', (req, res) => {
  console.log(`[DELETE] http://localhost:${global.port}/note - Deleting note`)

  /*
	  TODO-4:
		  Delete note with id from database

		  Note id is stored in variable noteId 
	*/
	const noteId = req.body.id

  /*

    // Your code here...



    // Upon succ, run the following lines to validate the response object and respond to client

    // --- begin of succ flow ---
    res.send()
    // --- end of succ flow ---



    // Upon fail, run the following lines to respond with an error

    // --- begin of fail flow ---
    res.status(500).send('Fail to delete')
    // --- end of fail flow ---

  */



  // TODO-4.1: Remove this section once you start working on TODO-4
  // --- Remove section begins ---
  res.send()
  // --- Remove section ends ---
})
/* -------------------------------------------------------------------------- */

module.exports = router
