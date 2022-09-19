function add_to_clipboard(id) {
    let input_search_widget = document.getElementById(id)
    input_search_widget.select();
    document.execCommand("Copy");
}