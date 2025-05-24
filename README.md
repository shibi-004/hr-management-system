# 🧑‍💼 Human Resource Management System (HRMS)

A cloud-native Human Resource Management System built using **AWS Lambda**, **DynamoDB**, and **S3**, with a frontend developed in **HTML**, **CSS**, and **JavaScript**. This system enables HR teams to manage employee records, leave requests, performance evaluations, payroll, attendance, and document uploads.

---

## 🚀 Features

- 👤 **Employee Management** – Add and manage employee details  
- 📝 **Leave Tracking** – Submit and track leave requests  
- 📈 **Performance Evaluation** – Submit and view performance reviews  
- 💰 **Payroll Processing** – Calculate and process salaries  
- 📅 **Attendance Monitoring** – Mark and view employee attendance  
- 📂 **Document Upload** – Upload and store employee documents in S3  

---

## 🛠️ Tech Stack

### Backend (Serverless):
- **AWS Lambda** – Serverless compute for business logic
- **Amazon DynamoDB** – NoSQL database to store employee, leave, and payroll data
- **Amazon S3** – File storage for employee documents

### Frontend:
- **HTML/CSS/JavaScript** – Static UI served locally or hosted on S3

---

## 🧩 Lambda Functions

1. `addEmployee` – Add new employee details  
2. `addLeaveRequest` – Submit a leave request  
3. `submitPerformance` – Submit a performance evaluation  
4. `processPayroll` – Calculate employee payroll  
5. `markAttendance` – Mark daily attendance  
6. `uploadDocument` – Upload employee-related documents to S3  

---

---

## 🧪 How to Run

1. Deploy Lambda functions via AWS Console or CLI  
2. Create DynamoDB tables for each domain (employee, leave, etc.)  
3. Create an S3 bucket for document uploads  
4. Link frontend forms to respective API Gateway endpoints(use your api gateway endpoint url in the code)  

---

## 📸 Screenshots

see the screenshots of the ui for reference



## 🙋‍♂️ Contributions

Open to improvements! Fork the repo, make changes, and submit a pull request.


