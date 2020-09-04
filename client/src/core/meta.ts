const fields = {
  user: [
    "id",
    "firstname",
    "lastname",
    "password",
    "role",
    "status",
    "username",
  ],
  department: ["name", "id"],
  student: ["user_id", "department_id", "id"],
  class: [
    "date",
    "session",
    "course_id",
    "studnet_id",
    "master_id",
    "department_id",
    "id",
  ],
  course: ["name", "unit", "department_id", "master_id", "id"],
  master: ["user_id", "department_id", "id"],
};

export const getFields = (resource: string) => {
  if (!resource || typeof fields[resource] === "undefined") return;

  return fields[resource];
};
