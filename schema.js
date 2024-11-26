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