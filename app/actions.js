"use server";

const PASSWORDS = {
  "01": process.env.CASE_STUDY_01_PASSWORD,
  "02": process.env.CASE_STUDY_02_PASSWORD,
};

export async function validateCaseStudyPassword(num, attempt) {
  const correct = PASSWORDS[num];
  if (!correct) return false;
  return attempt.trim().toLowerCase() === correct.trim().toLowerCase();
}
