export default function isBlank(data) {
  console.log(data);
  if (
    data.fullName == "" ||
    data.email == "" ||
    data.gender == "" ||
    data.mobile == "" ||
    data.password == "" ||
    data.uniID == "" ||
    data.year == "" ||
    data.batch == ""
  )
    return true;

  return false;
}
function checkLength(data) {
  return data.length < 6;
}
function isValidUniID(data) {
  return (
    data.uniID.startsWith("C") ||
    data.uniID.startsWith("E") ||
    data.uniID.startsWith("H") ||
    data.uniID.startsWith("B")
  );
}

function isEventBlank(data) {
  console.log(data);
  if (
    data.event == "" ||
    data.location == "" ||
    data.startDate == "" ||
    data.description == ""
  )
    return true;

  return false;
}
function isAdminBlank(data) {
  console.log(data);
  if (data.username == "" || data.Email == "" || data.Password == "")
    return true;

  return false;
}

export { checkLength, isValidUniID, isAdminBlank, isEventBlank };
