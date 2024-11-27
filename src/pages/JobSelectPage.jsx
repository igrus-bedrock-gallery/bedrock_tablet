import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/styles";

const JobListPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const jobData = location.state?.jobData;

  if (!jobData) {
    return (
      <div style={styles.container}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '2rem',
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#ffffff', marginBottom: '1rem' }}>
            잘못된 접근입니다. 다시 시도해주세요.
          </p>
          <button
            onClick={() => navigate('/categoryselect')}
            style={styles.button}
          >
            카테고리 선택으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button
        onClick={() => navigate('/categoryselect')}
        style={styles.backButton}
      >
        뒤로가기
      </button>

      <div style={{
        width: '100%',
        maxWidth: '800px',
        padding: '2rem'
      }}>
        <div style={styles.jobListBox}>
          <h2 style={styles.title}>{jobData.name}</h2>
          <div style={styles.jobListBox}>


            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {jobData.list.map((job, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate('/camera', {
                    state: { jobData: jobData, jobName: job }
                  })}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    '&:hover': {
                      transform: 'translateX(10px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)'
                    }
                  }}
                >
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#ffffff',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    {job}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListPage;