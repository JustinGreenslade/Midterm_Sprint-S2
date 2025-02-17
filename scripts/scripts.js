window.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome!");

  document.querySelector("#orderBtn").addEventListener("click", () => {
    submitOrder()
      .then((resolve) => {
        alert(resolve);
      })
      .catch((reject) => {
        alert(reject);
      });
  });

  function submitOrder() {
    return new Promise((resolve, reject) => {
      //resolve("Success!");

      try {
        validateOrderFields();
      } catch (error) {
        alert(error);
        reject("Failed!");
      }
    });
  }

  function validateOrderFields() {
    let name = document.querySelector("#").value
    // Validate Name

    // Validate Phone Number

    // Validate Email

    // Validate Address

    // Validate Order Type

    throw new Error("Test");
  }
});
