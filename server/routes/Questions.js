import express from 'express'
import { AskQuestion } from '../controlers/Questions'
const router = express.Router()
router.post('/Ask',AskQuestion)