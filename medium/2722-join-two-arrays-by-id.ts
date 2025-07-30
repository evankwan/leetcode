type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const joinedArray: ArrayType[] = []
    const idsAdded = new Map()
    function addedToJoinedArray(item) {
        joinedArray.push(item)
        idsAdded.set(item.id, joinedArray.length - 1)
    }
    const longerArray = arr1.length > arr2.length ? arr1 : arr2
    for (let i = 0; i < longerArray.length; i++) {
        const item1 = arr1[i]
        const item2 = arr2[i]
        if (item1?.id === item2?.id) {
            joinedArray.push({
                ...arr1[i],
                ...arr2[i],
            })
            idsAdded.set(item1.id, joinedArray.length - 1)
        }
        if (item1) {
            if (idsAdded.has(item1.id)) {
                const index = idsAdded.get(item1.id)
                joinedArray[index] = {
                    ...item1,
                    ...joinedArray[index]
                }
            } else {
                addedToJoinedArray(item1)
            }
        }
        if (item2) {
            if (idsAdded.has(item2.id)) {
                const index = idsAdded.get(item2.id)
                joinedArray[index] = {
                    ...joinedArray[index],
                    ...item2
                }
            } else {
                addedToJoinedArray(item2)
            }
        }
    }
    return joinedArray.sort((a, b) => a.id > b.id ? 1 : -1)
}

export {}