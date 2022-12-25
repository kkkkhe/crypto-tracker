import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStore } from "./rootState";

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
