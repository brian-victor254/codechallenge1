
// function to calculate the net salary
function calculateNetSalary() {
    let basicSalaryInput = prompt("Enter your basic salary:");
    let benefitsInput = prompt("Enter your benefits:");

    let basicSalary = Number(basicSalaryInput);
    let benefits = Number(benefitsInput);

    let grossSalary = basicSalary + benefits;

    // To calculate PAYE
    let paye = 0;
    if (grossSalary <= 24000) {
        paye = 0.1 * grossSalary;
    } else if (grossSalary <= 32333) {
        paye = 0.1 * 24000 + 0.25 * (grossSalary - 24000);
    } else if (grossSalary <= 500000) {
        paye = 0.1 * 24000 + 0.25 * (32333 - 24000) + 0.3 * (grossSalary - 32333);
    } else if (grossSalary <= 800000) {
        paye = 0.1 * 24000 + 0.25 * (32333 - 24000) + 0.3 * (500000 - 32333) + 0.325 * (grossSalary - 500000);
    } else {
        paye = 0.1 * 24000 + 0.25 * (32333 - 24000) + 0.3 * (500000 - 32333) + 0.325 * (800000 - 500000) + 0.35 * (grossSalary - 800000);
    }

    // To calculate NHIF deductions
    let nhifDeduction = 0;
    if (grossSalary <= 5999) {
        nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
        nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
        nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
        nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
        nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
        nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
        nhifDeduction = 950;
    } else if (grossSalary <= 44999) {
        nhifDeduction = 1000;
    } else if (grossSalary <= 49999) {
        nhifDeduction = 1100;
    } else if (grossSalary <= 59999) {
        nhifDeduction = 1200;
    } else if (grossSalary <= 69999) {
        nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
        nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
        nhifDeduction = 1500;
    } else if (grossSalary <= 99999) {
        nhifDeduction = 1600;
    } else {
        nhifDeduction = 1700;
    }

    // To calculate NSSF deductions
    let nssfDeduction = basicSalary * 0.06;
    if (basicSalary > 7000 && basicSalary <= 36000) {
        nssfDeduction += (basicSalary - 7000) * 0.06;
    } else if (basicSalary > 36000) {
        nssfDeduction += 29000 * 0.06;
    }

    let netSalary = grossSalary - paye - nhifDeduction - nssfDeduction;

    alert(`Gross Salary: ${grossSalary} Ksh\nPAYE: ${paye} Ksh\nNHIF Deduction: ${nhifDeduction} Ksh\nNSSF Deduction: ${nssfDeduction} Ksh\nNet Salary: ${netSalary} Ksh`);
}

calculateNetSalary();
