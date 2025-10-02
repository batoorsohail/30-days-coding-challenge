import { DateTime } from "https://cdn.jsdelivr.net/npm/luxon@3/build/es6/luxon.js";

export const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);