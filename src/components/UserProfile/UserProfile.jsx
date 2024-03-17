import { useEffect, useState } from "react";
import React from "react";
import "./UserProfile.css";
import Navbar from "../Navbar";
import Card from 'react-bootstrap/Card';


const UserProfile = () => {
  const [teamName, setTeamName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [editFlag, setEditFlag] = useState({ flag: false, index: null });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!teamName.trim()) {
      alert("Team name must be filled.");
      return;
    }
    if (members.length === 0) {
      alert("At least one member's details should be filled.");
      return;
    }
  };

  
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };
  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const [members, setMembers] = useState([]);
  const addMember = () => {
    if (members.length >= 3) {
      alert("You cannot add more than 3 members.");
      return;
    }
    if (!firstName || !email || !department || !lastName){
      alert("Fill the detail of member first");
      return;
    }
    if (editFlag.flag) {
      const newMembers = [...members];
      newMembers[editFlag.index] = { firstName, lastName, email, department };
      setMembers(newMembers);
      setEditFlag({ flag: false, index: null });
    } else {
      setMembers([...members, { firstName, lastName, email, department }]);
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setDepartment("");
  };
  useEffect(() => {
    console.log(members);
  }, [members]);

  return (
    <>
    <Navbar />
    <Card className="rounded">
      <Card.Body className="text-justify">
        <Card.Title>Your Profile</Card.Title>
        <Card.Text>
        First name :
        Last name:
        Email:
        Department:
        etc 

        </Card.Text>
      </Card.Body>
    </Card>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundColor: "#FF781699",
          margin: "20px",
          borderRadius: "20px",
          paddingBottom:"2rem",
          height: "auto",
          color: "white",
          fontFamily: "Inter",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#F66700",
            fontFamily: "DM Serif Text",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          Add Team Details
        </h2>
        <form
          style={{
            marginLeft: "40px",
            marginRight: "40px",
            fontFamily: "Inter",
          }}
        >
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Team Name
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="ideaTitle"
              onChange={handleTeamNameChange}
              value={teamName}
              
            />
          </div>
          <br />
          <strong>
            <h4
              style={{
                textAlign: "center",
                color: "#F66700",
                fontFamily: "Inter",
                margin: "-16px",
                fontSize: "20px",
              }}
            >
              TEAM MEMBERS
            </h4>
          </strong>
          <br />
          <div>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "2px" }}>
                <label htmlFor="formGroupExampleInput" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                />
              </div>
              <div style={{ margin: "2px" }}>
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "2px" }}>
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div style={{ margin: "2px" }}>
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Department
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="department"
                  value={department}
                  onChange={handleDepartmentChange}
                  required
                />
              </div>
            </div>
          </div>
          <br />
          <input
            id="submitIdeabtn"
            className="btn"
            style={{
              display: "flex",
              justifyContent: "right",
              color: "white",
              backgroundColor: "#F66700",
              alignItems: "right",
              textAlign: "center",
            }}
            value={editFlag.flag ? "Edit Members" : "Add Members"}
            onClick={addMember}
          />
          <br />
          <input
            id="submitIdeabtn"
            className="btn"
            type="button"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              backgroundColor: "#F66700",
              alignItems: "right",
              width: "100%",
              textAlign: "center",
            }}
            onClick={handleSubmit}
            value="Submit"
          />
        </form>
      </div>
      {/* Right Side - Time Left and Status Sections */}
      
      <div
        className="team-member-card"
        style={{
          flex: 1,
          backgroundColor: "#FF781699",
          margin: "20px",
          borderRadius: "20px",
          height: "auto",
          color: "white",
          fontFamily: "Inter",
        }}
      >
         {members.length === 0 ? (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              Add the team members' details.
            </p>
          ) : (
            members.map((member, index) => {
              if (index < 4) {
                return (
                  <div
                    className="card cod"
                    style={{
                      height: "auto",
                      margin: "3.5vh",
                      padding: "0.5rem",
                      position: "relative",
                      backgroundColor: "white",
                      borderRadius: "1.5rem",
                      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                      width: "auto",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="card-body codil"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "75%",
                      }}
                    >
                      <p style={{ fontSize: "0.8rem" }}>
                        <strong>Team Member {index + 1}</strong>
                        <br />
                        <strong>Name: </strong>
                        {member.firstName} {member.lastName}
                        <br />
                        <strong>Email: </strong> {member.email}
                        <strong> Department: </strong> {member.department}
                      </p>
                    </div>

                    <div
                      className="codir"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        flex: "25%",
                      }}
                    ></div>
                  </div>
                );
              }
              return null;
            })
          )}
      </div>
    </div>
    </>
  );
};

export default UserProfile;
