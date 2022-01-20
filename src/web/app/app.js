let app = document.getElementById("app");

function render(template) {
    morphdom(app, template);
}

function emit(arg) {
    window.external.invoke(JSON.stringify(arg));
}

window.onload = function() {
    emit({ type: "Update" });
}