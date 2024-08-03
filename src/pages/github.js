import React, { useEffect, useState } from 'react';
import Footer from "./footer";

const GitHubCommits = () => {
    const [commits, setCommits] = useState([]);
    const [setError] = useState(null);
    //const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCommits = async () => {
            const username = 'SivakumarShankar'; // GitHub username
            const repo = 'test'; // repository name
            const url = `https://api.github.com/repos/${username}/${repo}/commits`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setCommits(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchCommits();
    }, );

    return (
        <div class="">
        <div style={styles.container}>
            <h2 style={styles.heading}>GitHub Commits</h2>
            {/* {error && <p style={styles.error}>{error}</p>} */}
            <ul style={styles.list}>
                {commits.map((commit) => (
                    <li key={commit.sha} style={styles.listItem}>
                        <p><strong>Message:</strong> {commit.commit.message}</p>
                        <p><strong>Date:</strong> {new Date(commit.commit.committer.date).toLocaleString()} BST</p>
                        <p><strong>Author:</strong> {commit.commit.committer.name}</p>
                        <p><strong>Location:</strong> London, United Kingdom</p>
                    </li>
                ))}
            </ul>
            <p class="fst-italic">Note: These data are fetch from my <a class="link-opacity-75-hover text-decoration-none" target='_blank' rel='noreferrer' href="https://github.com/SivakumarShankar/test">GitHub</a> repository using API</p>
        </div>
        <Footer />
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif',
        maxWidth: '800px',
        margin: '80px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    heading: {
        textAlign: 'center',
    },
    error: {
        color: 'red',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        backgroundColor: '#fff',
        margin: '10px 0',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
};

export default GitHubCommits;
