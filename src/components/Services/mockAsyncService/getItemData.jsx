
import data from "../../../data/Data";

export function getItemData(id) {

    return new Promise((resolve) =>
      setTimeout(() => {
        const requestedItem = data.find(item => item.id === Number(id));
        resolve(requestedItem);
      }, 1000)
    );
  }