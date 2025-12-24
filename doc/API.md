# API Documentation

## Get All Events
GET /api/events

Response:
{
  "id": "1",
  "title": "Blood Donation Camp",
  "date": "2025-01-10",
  "location": "GEC Patan"
}

## Submit Contact Form
POST /api/contact

Body:
{
  "name": "Student Name",
  "email": "email@example.com",
  "message": "Interested in volunteering"
}
