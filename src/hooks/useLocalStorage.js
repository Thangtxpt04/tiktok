function useLocalStorage(key) {
    // Phương thức getItem sử dụng localStorage để lấy dữ liệu bằng key,
    //chuyển đổi dữ liệu từ chuỗi JSON sang đối tượng JS và trả về đối tượng đó.
    const getItem = () => {
        const dataStorage = JSON.parse(localStorage.getItem(key)) || {};
        return dataStorage;
    };

    // Đối tượng dataStorage là đối tượng được lấy từ localStorage khi hook được gọi,
    //nó được sử dụng để truy cập và thao tác với dữ liệu đã lưu trữ trong localStorage
    const dataStorage = getItem();

    // Phương thức setItem sử dụng localStorage để lưu trữ đối tượng được truyền vào vào localStorage,
    // sử dụng key được truyền vào.
    const setItem = (objSet) => {
        // Kết hợp đối tượng được truyền vào với đối tượng đã có trong localStorage (nếu có)
        // bằng cách sử dụng phương thức Object.assign
        Object.assign(dataStorage, objSet);
        const jsonData = JSON.stringify(dataStorage);
        return localStorage.setItem(key, jsonData);
    };

    // Trả về một mảng gồm 2 giá trị là `dataStorage` và `setItem`,
    // cho phép sử dụng nó trong các component khác của ứng dụng.
    return [dataStorage, setItem];
}

export default useLocalStorage;
