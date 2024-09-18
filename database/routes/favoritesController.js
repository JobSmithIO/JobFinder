//Co-authored by Brian N. & Erin L.
import express from 'express';
import {
  createFave,
  getFaves,
  updateFave,
  deleteFave,
} from '../tableFunctions/favoritesMethods.js';
import { error } from 'console';

const router = express.Router();

//createFave
router.post('/createFavorites', async (req, res, next) => {
  try {
    const fave = await createFave(req.body);
    res.json(fave);
  } catch (error) {
    console.error('Error in /db/createFavorites:', error);
    return next({
      log: `Error in createFavorites: ${error.message}`,
      status: 500,
      message: {
        err: 'Error in createFavorites. Favorite was not added to the database',
      },
    });
  }
});

//getFaves
router.get('/getFavorites/:userId', async (req, res, next) => {
  console.log('GET /getFavorites/:userId route hit');
  console.log('Received userId:', req.params.userId);
  try {
    const allFaves = await getFaves(req.params.userId);
    console.log('Retrieved allFaves:', allFaves);
    res.json(allFaves);
  } catch (error) {
    console.error('Error in /db/getFavorites', error);
    return next({
      log: `Check getFavorites middleware for errors: ${error.message}`,
      status: 500,
      message: { err: 'Was not able to get favorites' },
    });
  }
});

//updateFave
router.patch('/updateFavorites', async (req, res, next) => {
  try {
    const updatedFaves = await updateFave(req.body);
    res.json(updatedFaves);
  } catch {
    console.error('Error in /db/updateFavorites');
    return next({
      log: `Check updateFavorites middleware for errors: ${error.message}`,
      status: 500,
      message: { err: 'Was not able to update favorites' },
    });
  }
});

//deleteFave
router.delete('/deleteFavorites', async (req, res, next) => {
  try {
    const deletedFaves = await deleteFave(req.body);
    res.json(deletedFaves);
  } catch {
    console.error('Error in /db/deleteFavorites');
    return next({
      log: `Check deleteFavorites middleware for errors: ${error.message}`,
      status: 500,
      message: { err: 'Was not able to delete favorites' },
    });
  }
});

export default router;
