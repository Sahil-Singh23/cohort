function searchBackend() {
  console.log("Request sent to backend");
}

let timer;

function debouncedSearchBackend() {
  clearTimeout(timer);
  timer = setTimeout(searchBackend, 30);
}

debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
