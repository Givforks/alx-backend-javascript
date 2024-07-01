/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String.
 * }[]} students - The list of students.
 * @author Givens Emmah Abraham <https://github.com/giveforks>
 * @returns
 */

export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
/* data manipulation */
  return [];
}
