import { EnthusiasmAction } from "../Actions/Actions";
import { StoreState } from "../Types/Types";
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "../Constants/Constants";

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default:
            throw new Error("Action not defined");
    }
}