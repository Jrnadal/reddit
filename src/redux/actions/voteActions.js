import { ADD_ONE_TO_VOTE, MINUS_ONE_TO_VOTE } from "./actionConstants";

export const addOneToVote = (id) => ({ type: ADD_ONE_TO_VOTE, payload: id });
export const minusOneToVote = (id) => ({
    type: MINUS_ONE_TO_VOTE,
    payload: id,
});
