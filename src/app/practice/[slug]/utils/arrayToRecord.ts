type Item<Value extends { id: string }> = { id: string; [key: string]: Value };

type ArrayToRecord = <Value extends { id: string }>(
  items: Item<Value>[]
) => Record<string, Item<Value>>;

const arrayToRecord: ArrayToRecord = (items) => {
  return items.reduce((record, item) => ({ ...record, [item.id]: item }), {});
};
