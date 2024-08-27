"use client";
import * as React from "react";

export const EmailTemplate = ({ name, email, phone, message }) => (
  <div>
    <h1>Inquiry From Icommission</h1>
    <ul>
      <li>
        <strong>Name:</strong> {name}
      </li>
      <li>
        <strong>Email:</strong> {email}
      </li>
      <li>
        <strong>Phone:</strong> {phone}
      </li>
      <li>
        <strong>Message:</strong> {message}
      </li>
    </ul>
  </div>
);
