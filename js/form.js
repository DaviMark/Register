document.addEventListener("DOMContentLoaded", () => {
    const dateTimeField = document.getElementById("dateTime");
    const now = new Date();
    const formattedDateTime = now.toISOString().slice(0, 16); // Formato compatível com datetime-local
    dateTimeField.value = formattedDateTime;
});
