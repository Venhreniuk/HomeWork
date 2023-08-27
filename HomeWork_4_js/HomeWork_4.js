//ЗАВДАННЯ #1
function sumSliceArray(arr, first, second) {
  if (typeof first !== 'number' || typeof second !== 'number') {
    throw new Error('must be numbers');
  }
  
  if (first >= arr.length || second >= arr.length) {
    throw new Error('array size exceeded');
  }

    if (first > second) {
    throw new Error('The first number must be smaller than the second');
  }

  let sum = 0;
  for (let i = first; i <= second; i++) {
    sum += arr[i];
  }

  return sum;
}


//ЗАВДАННЯ #2

function checkAge() {
  try {
    const name = prompt("Please enter your name:");
    const age = prompt("Please enter your age:");
    const status = prompt("Please enter your status (admin, moderator, user):");
    
    if (!name || !age || !status) {
      throw new Error("The field is empty! Please enter your age");
    }
    
    const parsedAge = parseInt(age);
    if (isNaN(parsedAge)) {
      throw new EvalError("Age must be a number!");
    }

    if (parsedAge < 18 || parsedAge > 70) {
      throw new RangeError("You must be between 18 and 70 years old to access the movie.");
    }

    if (!(status === "admin" || status === "moderator" || status === "user")) {
      throw new EvalError("Invalid status. Please enter admin, moderator, or user.");
    }

    alert("You can watch the movie!");
  } catch (error) {
    alert(`Error: ${error.name} - ${error.message}`);
  }
}

checkAge();


//ЗАВДАННЯ 3

function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new Error('Both width and height must be numbers.');
  }

  if (width <= 0 || height <= 0) {
    throw new Error('Both width and height must be positive numbers.');
  }

  return width * height;
}


//завдання 4

class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = 'MonthException';
  }
}

function showMonthName(month) {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  if (month < 1 || month > 12) {
    throw new MonthException('Incorrect month number');
  }

  return months[month - 1];
}


//ЗАВДАННЯ #5

function showUser(id) {
  if (id < 0) {
    throw new Error("User ID cannot be negative.");
  }

  return { id: id };
}

function showUsers(ids) {
  const validUsers = [];

  for (const id of ids) {
    try {
      const user = showUser(id);
      validUsers.push(user);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  return validUsers;
}

