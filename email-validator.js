// email-validator.js
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
if (require.main === module) {
  const [email] = process.argv.slice(2);
  if (!email) { console.log("Usage: node email-validator.js user@example.com"); process.exit(1); }
  console.log(isValidEmail(email) ? "valid" : "invalid");
}
module.exports = isValidEmail;
