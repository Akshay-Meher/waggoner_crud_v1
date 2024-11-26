const tableDefinitions = [
  {
    name: 'Countries',
    query: `
        CREATE TABLE IF NOT EXISTS 'Countries' (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          code TEXT NOT NULL,
          createdDate TEXT,
          updatedDate TEXT,
          isDeleted BOOLEAN NOT NULL DEFAULT 0
        )`
  },
  {
    name: 'SecretQuestions',
    query: `
        CREATE TABLE IF NOT EXISTS 'SecretQuestions' (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          code TEXT NOT NULL,
          createdDate TEXT,
          updatedDate TEXT,
          isDeleted BOOLEAN NOT NULL DEFAULT 0
        )`
  },
  {
    name: 'HearAboutUs',
    query: `
        CREATE TABLE IF NOT EXISTS 'HearAboutUs' (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          has_text_field BOOLEAN NOT NULL,
          text_field_text TEXT,
          is_selected BOOLEAN,
          user_id INTEGER,
          created_date TEXT,
          updated_date TEXT,
          is_deleted BOOLEAN NOT NULL DEFAULT 0
        )`
  },
  {
    name: 'Licenses',
    query: `
        CREATE TABLE IF NOT EXISTS 'Licenses' (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          first_start_date TEXT,
          is_trial BOOLEAN,
          license_code TEXT,
          distributor TEXT,
          distributor_email_body TEXT,
          is_distributor_email_sent BOOLEAN,
          is_trial15_sent BOOLEAN,
          is_trial3_sent BOOLEAN,
          is_activated BOOLEAN,
          is_banned BOOLEAN,
          pc_name TEXT,
          trial_license_code TEXT,
          last_start_date TEXT,
          last_access_date TEXT
        )`
  },
  {
    name: 'Users',
    query: `
        CREATE TABLE IF NOT EXISTS 'Users' (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          first_name TEXT,
          last_name TEXT,
          phone_number TEXT,
          email_address TEXT,
          company_name TEXT,
          website_url TEXT,
          country TEXT,
          state TEXT,
          city TEXT,
          address TEXT,
          zip_code TEXT,
          secret_question TEXT,
          secret_question_answer TEXT,
          password TEXT,
          d15_selected INTEGER,
          show_disorders_selected INTEGER,
          auditory_response INTEGER,
          extend_enabled INTEGER,
          logo TEXT,
          reports_path TEXT,
          created_date TEXT,
          updated_date TEXT,
          is_deleted BOOLEAN NOT NULL DEFAULT 0,
          license_key TEXT
        )`
  },
  {
    name: 'Tests',
    query: `
        CREATE TABLE IF NOT EXISTS 'Tests' (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          image TEXT,
          description TEXT,
          test_order INTEGER,
          createdDate TEXT,
          updatedDate TEXT,
          isDeleted BOOLEAN NOT NULL DEFAULT 0
        )`
  },
  {
    name: 'Results',
    query: `
        CREATE TABLE IF NOT EXISTS 'Results' (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          test_id INTEGER,
          test_name TEXT,
          eye TEXT,
          binocular INTEGER,
          take_date TEXT,
          patient_id TEXT,
          right_eye_test_id TEXT,
          prev_eye_test_id TEXT,
          d15_path TEXT,
          calculated_result TEXT,
          diagnosis_notes TEXT,
          result_notes TEXT,
          sections TEXT,
          diagnosis TEXT,
          createdDate TEXT,
          updatedDate TEXT,
          isDeleted BOOLEAN NOT NULL DEFAULT 0,
          xamarin_id INTEGER
        )`
  },
  {
    name: 'Sections',
    query: `
        CREATE TABLE IF NOT EXISTS 'Sections' (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          plates TEXT,
          totalTestPlates INTEGER,
          correctAnswersToPass INTEGER,
          incorrectAnswersBeforeStop INTEGER,
          isTraversed BOOLEAN
        )`
  },
  {
    name: 'ResultSections',
    query: `
        CREATE TABLE IF NOT EXISTS 'ResultSections' (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          result_id INTEGER,
          patient_id TEXT,
          eye TEXT,
          section_type INTEGER,
          section_name TEXT,
          correct_answers INTEGER,
          incorrect_answers INTEGER,
          total_answers INTEGER,
          is_passed INTEGER,
          as_result_string TEXT,
          createdDate TEXT,
          updatedDate TEXT,
          isDeleted BOOLEAN NOT NULL DEFAULT 0,
          xamarin_result_section_id INTEGER
        )`
  },
  {
    name: 'ResultDiagnosis',
    query: `
        CREATE TABLE IF NOT EXISTS 'ResultDiagnosis' (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          diagnosis_id INTEGER,
          result_id INTEGER,
          createdDate TEXT,
          updatedDate TEXT,
          isDeleted BOOLEAN NOT NULL DEFAULT 0
        )`
  },
  {
    name: 'Patients',
    query: `
        CREATE TABLE IF NOT EXISTS 'Patients' (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          first_name TEXT,
          last_name TEXT,
          date_of_birth TEXT,
          gender TEXT,
          patient_id TEXT,
          last_time_test_taken TEXT,
          phone TEXT,
          email TEXT,
          createdDate TEXT,
          updatedDate TEXT,
          isDeleted BOOLEAN NOT NULL DEFAULT 0
        )`
  },
  {
    name: 'Diagnosis',
    query: `
        CREATE TABLE IF NOT EXISTS 'Diagnosis' (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          icd10 TEXT,
          notes TEXT,
          is_new BOOLEAN NOT NULL DEFAULT 0,
          is_genetic BOOLEAN NOT NULL DEFAULT 0,
          created_date TEXT,
          updated_date TEXT,
          is_deleted BOOLEAN NOT NULL DEFAULT 0
        )`
  }
];

const insertStatements = [
  {
    name: 'Countries',
    query: `
        INSERT INTO 'Countries' (name, code, createdDate, updatedDate)
        VALUES (?, ?, ?, ?)
      `
  },
  {
    name: 'HearAboutUs',
    query: `
        INSERT INTO 'HearAboutUs' (name, has_text_field, text_field_text, is_selected, created_date, updated_date)
        VALUES (?, ?, ?, ?, ?, ?)
      `
  },
  {
    name: 'Licenses',
    query: `
        INSERT INTO 'Licenses' (first_start_date, is_trial, license_code, distributor, distributor_email_body, is_distributor_email_sent, is_trial15_sent, is_trial3_sent, is_activated, is_banned, pc_name, trial_license_code, last_start_date, last_access_date)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `
  },
  {
    name: 'Users',
    query: `
        INSERT INTO 'Users' (first_name, last_name, phone_number, email_address, company_name, website_url, country, state, city, address, zip_code, secret_question, secret_question_answer,password, show_disorders_selected, auditory_response, extend_enabled, created_date)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `
  },
  {
    name: 'Results',
    query: `
        INSERT INTO 'Results' (test_id, test_name, eye, binocular, take_date, patient_id, right_eye_test_id, prev_eye_test_id, d15_path, calculated_result, diagnosis_notes, result_notes, sections, diagnosis, createdDate, updatedDate)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `
  },
  {
    name: 'Tests',
    query: `
        INSERT INTO 'Tests' (title, image, description, test_order, createdDate, updatedDate)
        VALUES (?, ?, ?, ?, ?, ?)
      `
  },
  {
    name: 'Sections',
    query: `
        INSERT INTO 'Sections' (name, plates, totalTestPlates, correctAnswersToPass, incorrectAnswersBeforeStop, isTraversed)
        VALUES (?, ?, ?, ?, ?, ?)
      `
  },
  {
    name: 'ResultSections',
    query: `
        INSERT INTO 'ResultSections' (result_id, patient_id, eye, section_type, section_name, correct_answers, incorrect_answers, total_answers, is_passed, as_result_string, createdDate, updatedDate)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `
  },
  {
    name: 'ResultDiagnosis',
    query: `
        INSERT INTO 'ResultDiagnosis' (diagnosis_id, result_id, createdDate, updatedDate)
        VALUES (?, ?, ?, ?)
      `
  },
  {
    name: 'Patients',
    query: `
        INSERT INTO 'Patients' (first_name, last_name, date_of_birth, gender, patient_id, last_time_test_taken, phone, email, createdDate, updatedDate)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `
  },
  {
    name: 'Diagnosis',
    query: `
        INSERT INTO 'Diagnosis' (name, icd10, notes, is_genetic, created_date, updated_date)
        VALUES (?, ?, ?, ?, ?, ?)
      `
  }
];

const updateStatements = [
  {
    name: 'UpdateUsersBasicInfo',
    query: `
      UPDATE Users
      SET 
        first_name = ?, 
        last_name = ?, 
        phone_number = ?, 
        email_address = ?, 
        company_name = ?, 
        website_url = ?, 
        country = ?, 
        state = ?, 
        city = ?, 
        address = ?, 
        zip_code = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateHearAboutUs',
    query: `
      UPDATE HearAboutUs
      SET 
        text_field_text = ?, 
        is_selected = ?, 
        user_id = ?,
        updated_date = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateLicenses',
    query: `
      UPDATE Licenses
      SET 
        license_code = ?, 
        is_trial = ?, 
        is_activated = ?, 
        first_start_date = ?, 
        last_start_date = ?, 
        last_access_date = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateLicensesTrial',
    query: `
      UPDATE Licenses
      SET 
        is_trial = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateUsersLicenseKey',
    query: `
      UPDATE Users
      SET 
        license_key = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateUsersSettings',
    query: `
      UPDATE Users
      SET 
        d15_selected = ?, 
        show_disorders_selected = ?, 
        auditory_response = ?, 
        extend_enabled = ?, 
        logo = ?, 
        reports_path = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateUsersPassword',
    query: `
      UPDATE Users
      SET 
        password = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateUsersSecretQuestion',
    query: `
      UPDATE Users
      SET 
        secret_question = ?, 
        secret_question_answer = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateTests',
    query: `
      UPDATE Tests
      SET 
        test_order = ?, 
        updatedDate = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateResults',
    query: `
      UPDATE Results
      SET 
        diagnosis = ?, 
        diagnosis_notes = ?, 
        updatedDate = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateResultsFull',
    query: `
      UPDATE Results
      SET 
        eye = ?, 
        binocular = ?, 
        take_date = ?, 
        right_eye_test_id = ?, 
        prev_eye_test_id = ?, 
        d15_path = ?, 
        calculated_result = ?, 
        diagnosis_notes = ?, 
        result_notes = ?, 
        updatedDate = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateResultsEyeTestId',
    query: `
      UPDATE Results
      SET 
        right_eye_test_id = ?, 
        updatedDate = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateResultSections',
    query: `
      UPDATE ResultSections
      SET 
        result_id = ?, 
        patient_id = ?, 
        eye = ?, 
        section_type = ?, 
        section_name = ?, 
        correct_answers = ?, 
        incorrect_answers = ?, 
        total_answers = ?, 
        is_passed = ?, 
        as_result_string = ?, 
        updatedDate = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateResultDiagnosis',
    query: `
      UPDATE ResultDiagnosis
      SET 
        diagnosis_id = ?, 
        result_id = ?, 
        updatedDate = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdatePatientsLastTest',
    query: `
      UPDATE Patients
      SET 
        last_time_test_taken = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdatePatientsFull',
    query: `
      UPDATE Patients
      SET 
        first_name = ?, 
        last_name = ?, 
        date_of_birth = ?, 
        gender = ?, 
        patient_id = ?, 
        last_time_test_taken = ?, 
        phone = ?, 
        email = ?, 
        updatedDate = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateDiagnosis',
    query: `
      UPDATE Diagnosis
      SET 
        name = ?, 
        icd10 = ?, 
        notes = ?
      WHERE id = ?
    `
  },
  {
    name: 'UpdateLicensesLastAccessDate',
    query: `
      UPDATE Licenses
      SET 
        last_access_date = ?
      WHERE id = ?
    `
  }
];

module.exports = { tableDefinitions, insertStatements, updateStatements };