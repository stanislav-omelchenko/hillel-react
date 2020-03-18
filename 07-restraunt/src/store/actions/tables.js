import api from "../../services/api";
export const ACTION_TABLE_UPDATE = "TABLE_UPDATE";
export const ACTION_TABLE_CREATE = "TABLE_CREATE";
export const ACTION_TABLE_REMOVE = "TABLE_REMOVE";
export const ACTION_TABLES_SET = "TABLES_SET";
export const ACTION_TABLE_CHANGE_REQUEST_COUNT = "TABLE_CHANGE_REQUEST_COUNT";
export const ACTION_TABLE_SET_SEARCH = "TABLE_SET_SEARCH";

function updateTable(table) {
  return { type: ACTION_TABLE_UPDATE, payload: table };
}

function createTable(table) {
  return { type: ACTION_TABLE_CREATE, payload: table };
}

function removeTable(id) {
  return { type: ACTION_TABLE_REMOVE, payload: id };
}

function setTables(tables) {
  return { type: ACTION_TABLES_SET, payload: tables };
}

function requestInc() {
  return { type: ACTION_TABLE_CHANGE_REQUEST_COUNT, payload: +1 };
}
function requestDec() {
  return { type: ACTION_TABLE_CHANGE_REQUEST_COUNT, payload: -1 };
}

export function setTableSearch(searchTerm) {
  return { type: ACTION_TABLE_SET_SEARCH, payload: searchTerm };
}

export const getTables = () => async dispatch => {
  dispatch(requestInc());
  const resp = await api.tables("");

  dispatch(setTables(resp.data));
  dispatch(requestDec());
};

export const saveTable = table => async dispatch => {
  dispatch(requestInc());
  if (table.id !== undefined) {
    table = (await api.tables.put(table.id, table)).data;
    dispatch(updateTable(table));
  } else {
    table = (await api.tables.post("", table)).data;
    dispatch(createTable(table));
  }
  dispatch(requestDec());
};

export const deleteTable = tableId => async dispatch => {
  dispatch(requestInc());
  const resp = await api.tables.delete(tableId);

  dispatch(removeTable(resp.data.id));
  dispatch(requestDec());
};
