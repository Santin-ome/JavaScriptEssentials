let userRole = "admin";
let accesslevel;

if (userRoll === "admin") {
    accesslevel = "Full access granted";
} else if (userRole === "manager") {
    accesslevel = "Limited access granted";
} else {
    accesslevel = "No access granted";
}

console.log("Access level:", accesslevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, admin";
    } else {
        userMessage = "Welcome, user";
    }
} else {
    userMessage = "Please lo in to access the system";
}

console.log("user Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;

    case "manager":
        userCategory = "manager";
        break;

    case "subscriber":
        userCategory = "subscriber";
        break;

    default:
        userCategory = "unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);