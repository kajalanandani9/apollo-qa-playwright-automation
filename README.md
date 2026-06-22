# Apollo QA Assignment — Playwright Automation

Automated test suite for **practicesoftwaretesting.com**, built as part of the Apollo Green Solutions QA Automation Intern Assignment. Covers login validation, search functionality, and a full end-to-end checkout flow — including automated detection of a real application defect.

## CONTENTS

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Test Coverage](#test-coverage)
4. [How to Run Locally](#how-to-run-locally)
5. [Results](#results)
6. [Bug Found via Automation](#bug-found-via-automation)
7. [Future Improvements](#future-improvements)
8. [Related Links](#related-links)

---

## Overview

This repository contains the Playwright automation component of a broader QA assignment, which also included manual testing, API testing (Postman), and bug tracking (Excel + Jira). This repo focuses specifically on automated regression tests for core user flows.

## Tech Stack

- **Playwright** (JavaScript)
- **Node.js** (v18+)

## Test Coverage

4 automated test cases — 3 run across 3 browsers (Chromium, Firefox, WebKit), plus 1 full end-to-end flow:

- **TC-01**: Login with invalid credentials shows error message
- **TC-02**: Login page loads with all required fields visible
- **TC-03**: Search for an existing product returns results
- **TC-11**: Complete end-to-end checkout flow — add to cart → sign in → billing address → payment → confirm. This test intentionally surfaces a real defect (see below).

## How to Run Locally

1. Install [Node.js](https://nodejs.org) (v18 or above)
2. Clone this repository
3. Install dependencies:
