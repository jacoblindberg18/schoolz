getCustomers = async () => {
    try {
        const result = axios.get("http://localhost:5000/api/customers");

        const customers = await result;

        console.log("these are customers", customers);
        firstName(customers);
    } catch (err) {
        console.log("ERROR", err);
    }
};

getTeachers = async () => {
    try {
        const result = axios.get("http://localhost:5000/api/teachers");

        const { data: teachers } = await result;

        console.log("these are teachers", teachers);
        teacherNames(teachers, result);
    } catch (err) {
        console.log("ERROR", err);
    }
};

getCart = async () => {
    try {
        const result = axios.get("http://localhost:5000/api/cart/?CustomerId=1");

        const { data: cart } = await result;

        console.log("these are cart", cart);
        cartNumberOfItems(cart);
    } catch (err) {
        console.log("ERROR", err);
    }
};

getClasses = async () => {
    try {
        const result = axios.get("http://localhost:5000/api/classes");

        const { data: classes } = await result;

        console.log("these are classes", classes);
        classesInfo(classes);
        classesDates(classes);
    } catch (err) {
        console.log("ERROR", err);
    }
};
getCustomers();
getTeachers();
getCart();
getClasses();

firstName = (customers) => {
    customers.forEach((element) => {
        console.log(element.FirstName, "hej");
    });
};

teacherNames = (teachers) => {
    const teacherHeadings = Array.from(document.querySelectorAll(".teacher-name"));
    teacherHeadings.forEach((heading, index) => {
        heading.innerText = `${teachers[index].Prefix} ${teachers[index].LastName}`;
    });
};

cartNumberOfItems = (cart) => {
    const cartCount = document.getElementById("cart-count");
    cartCount.style.display = "inline-block";
    cartCount.innerText = `${cart.length}`;
};

classesInfo = (classes) => {
    const classTitles = Array.from(document.querySelectorAll(".class-title"));
    const ageSpan = Array.from(document.querySelectorAll(".age-span"));
    const ageIcons = Array.from(document.querySelectorAll(".class-card-calendar-icon"));
    const classDescriptions = Array.from(document.querySelectorAll(".class-description"));
    const classTimes = Array.from(document.querySelectorAll(".class-time"));

    classTitles.forEach((title, index) => {
        title.innerText = `${classes[index].Title}`;
    });
    ageSpan.forEach((element, index) => {
        element.innerHTML += `Age ${classes[index].MinAge} to ${classes[index].MaxAge}`;
    });
    classDescriptions.forEach((element, index) => {
        element.innerText = `${classes[index].Description}`;
    });
    classTimes.forEach((element, index) => {
        element.innerHTML += `${classes[index].Time}AM`;
    });
    console.log("KLASSERNA SYNS", classes);
};

classesDates = (classes) => {
    const dates = Array.from(document.querySelectorAll(".start-date"));
    const months = Array.from(document.querySelectorAll(".start-month"));
    const classStartDate = new Date(classes[0].Date);

    // Converts date and day to its "keynumber" and then into date and abbrieviated month
    Date.shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    shortMonths = (classStartDate) => {
        return Date.shortMonths[classStartDate.getMonth()];
    };

    let month = shortMonths(classStartDate);
    let date = classStartDate.getDate().toString();

    // Assigns the date and month to the boxes in Class Card
    dates.forEach((element, index) => {
        element.innerText = `${date}`;
    });
    months.forEach((element, index) => {
        element.innerText = `${month}`;
    });
};
