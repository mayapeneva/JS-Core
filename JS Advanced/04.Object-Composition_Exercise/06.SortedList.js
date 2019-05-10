function sortedList() {
    return collection = (function () {
        let list = [];
        let size = 0;
        function add(element) {
            list.push(element);
            list.sort((a,b) => a-b);
            this.size++;
        }

        function remove(index) {
            if (index >= 0 && index < list.length) {
                list.splice(index, 1);
                this.size--;
            }
        }

        function get(index) {
            if (index >= 0 && index < list.length) {
                return list[index];
            }
        }

        return {
            add,
            remove,
            get,
            size
        }
    })();
}