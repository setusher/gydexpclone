import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div 
      className="dashboard"
      style={{
        '--lines-bg': 'url(/assets/lines.png)'
      }}
    >
      <div className="dashboard-container">
        {/* Left Sidebar */}
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="logo">
              <div className="logo-icon">🌿</div>
              <span className="logo-text">Encom</span>
            </div>
            <div className="user-profile">
              <div className="profile-pic">👤</div>
              <span className="dropdown-arrow">▼</span>
            </div>
          </div>

          <nav className="sidebar-nav">
            <div className="nav-section">
              <a href="#search" className="nav-item">Search</a>
              <a href="#inbox" className="nav-item">Inbox</a>
              <a href="#my-issues" className="nav-item active">My issues</a>
            </div>

            <div className="nav-section">
              <h3 className="section-title">Favorites</h3>
              <a href="#bug" className="nav-item">Bug</a>
            </div>

            <div className="nav-section">
              <h3 className="section-title">Teams</h3>
              <div className="team-item">
                <div className="team-header">
                  <span>Dev</span>
                </div>
                <div className="team-submenu">
                  <a href="#issues" className="nav-item active">Issues</a>
                  <a href="#backlog" className="nav-item">Backlog</a>
                  <a href="#all" className="nav-item">All</a>
                  <a href="#board" className="nav-item">Board</a>
                </div>
              </div>
              <div className="team-item">
                <div className="team-header">
                  <span>Cycles</span>
                  <span className="expand-arrow">▶</span>
                </div>
                <div className="team-submenu">
                  <a href="#active" className="nav-item">Active</a>
                  <a href="#upcoming" className="nav-item">Upcoming</a>
                </div>
              </div>
            </div>

            <div className="nav-section">
              <h3 className="section-title">Projects</h3>
              <div className="project-icon">📁</div>
            </div>

            <div className="nav-section">
              <h3 className="section-title">Archive</h3>
              <div className="project-icon">📁</div>
            </div>
          </nav>

          <div className="sidebar-footer">
            <a href="#invite" className="nav-item">Invite people</a>
            <a href="#help" className="nav-item">Help & Feedback</a>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="content-header">
            <h1 className="page-title">Active issues 15</h1>
            <button className="filter-btn">+ Filter</button>
          </div>

          <div className="issues-container">
            {/* In Review Section */}
            <div className="issue-section">
              <h2 className="section-header">In Review 2</h2>
              <div className="issue-list">
                <div className="issue-item">
                  <input type="checkbox" className="issue-checkbox" />
                  <span className="issue-menu">⋯</span>
                  <span className="issue-id">ECM-10</span>
                  <span className="issue-title">Data transmission</span>
                  <div className="issue-status green">✓</div>
                  <div className="issue-tags">
                    <span className="tag small">#1</span>
                    <span className="tag orange">Solar Sailer</span>
                  </div>
                  <div className="issue-meta">
                    <span className="play-icon">▶</span>
                    <span className="count">1</span>
                  </div>
                  <span className="issue-date">Jun 26</span>
                </div>

                <div className="issue-item">
                  <input type="checkbox" className="issue-checkbox" />
                  <span className="issue-menu">⋯</span>
                  <span className="issue-id">ECM-9</span>
                  <span className="issue-title">Engine and power system</span>
                  <div className="issue-status green">✓</div>
                  <div className="issue-tags">
                    <span className="tag small">#1</span>
                    <span className="tag orange">Solar Sailer</span>
                  </div>
                  <div className="issue-meta">
                    <span className="play-icon">▶</span>
                    <span className="count">1</span>
                  </div>
                  <span className="issue-date">Jun 26</span>
                </div>
              </div>
            </div>

            {/* In Progress Section */}
            <div className="issue-section">
              <h2 className="section-header">In Progress 5</h2>
              <div className="issue-list">
                <div className="issue-item">
                  <input type="checkbox" className="issue-checkbox" />
                  <span className="issue-menu">⋯</span>
                  <span className="issue-id">ECM-21</span>
                  <span className="issue-title">Location history gets wiped</span>
                  <div className="issue-status yellow">!</div>
                  <div className="issue-tags">
                    <span className="tag red">Bug</span>
                  </div>
                  <div className="issue-meta">
                    <span className="play-icon">▶</span>
                    <span className="count">1</span>
                  </div>
                  <span className="issue-date">Jun 26</span>
                </div>

                <div className="issue-item">
                  <input type="checkbox" className="issue-checkbox" />
                  <span className="issue-menu">⋯</span>
                  <span className="issue-id">ECM-20</span>
                  <span className="issue-title">ApplicationStore gives Spacetime error</span>
                  <div className="issue-status yellow">!</div>
                  <div className="issue-tags">
                    <span className="tag red">Bug</span>
                  </div>
                  <div className="issue-meta">
                    <span className="play-icon">▶</span>
                    <span className="count">1</span>
                  </div>
                  <span className="issue-date">Jun 26</span>
                </div>

                <div className="issue-item">
                  <input type="checkbox" className="issue-checkbox" />
                  <span className="issue-menu">⋯</span>
                  <span className="issue-id">ECM-19</span>
                  <span className="issue-title">Add createGroup mutation</span>
                  <div className="issue-status purple">●</div>
                  <div className="issue-tags">
                    <span className="tag purple">Feature</span>
                    <span className="tag gray">#Mainframe</span>
                  </div>
                  <div className="issue-meta">
                    <span className="play-icon">▶</span>
                    <span className="count">1</span>
                  </div>
                  <span className="issue-date">Jun 26</span>
                </div>

                <div className="issue-item">
                  <input type="checkbox" className="issue-checkbox" />
                  <span className="issue-menu">⋯</span>
                  <span className="issue-id">ECM-16</span>
                  <span className="issue-title">Better error handling</span>
                  <div className="issue-status purple">●</div>
                  <div className="issue-tags">
                    <span className="tag gray">#Mainframe</span>
                  </div>
                  <div className="issue-meta">
                    <span className="play-icon">▶</span>
                    <span className="count">1</span>
                  </div>
                  <span className="issue-date">Jun 26</span>
                </div>

                <div className="issue-item">
                  <input type="checkbox" className="issue-checkbox" />
                  <span className="issue-menu">⋯</span>
                  <span className="issue-id">ECM-13</span>
                  <span className="issue-title">Syncservice memory optimization</span>
                  <div className="issue-status purple">●</div>
                  <div className="issue-tags">
                    <span className="tag gray">#Mainframe</span>
                  </div>
                  <div className="issue-meta">
                    <span className="play-icon">▶</span>
                    <span className="count">1</span>
                  </div>
                  <span className="issue-date">Jun 26</span>
                </div>
              </div>
            </div>

            {/* Todo Section */}
            <div className="issue-section">
              <h2 className="section-header">Todo 8</h2>
              <div className="issue-list">
                <div className="issue-item">
                  <input type="checkbox" className="issue-checkbox" />
                  <span className="issue-menu">⋯</span>
                  <span className="issue-id">ECM-18</span>
                  <span className="issue-title">ApplicationStore support for new groups</span>
                  <div className="issue-status empty">○</div>
                  <div className="issue-tags">
                    <span className="tag blue">#CLU</span>
                  </div>
                  <div className="issue-meta">
                    <span className="play-icon">▶</span>
                    <span className="count">1</span>
                  </div>
                  <span className="issue-date">Jun 26</span>
                </div>

                <div className="issue-item">
                  <input type="checkbox" className="issue-checkbox" />
                  <span className="issue-menu">⋯</span>
                  <span className="issue-id">ECM-17</span>
                  <span className="issue-title">Login resolver support</span>
                  <div className="issue-status empty">○</div>
                  <div className="issue-tags">
                    <span className="tag blue">#CLU</span>
                  </div>
                  <div className="issue-meta">
                    <span className="play-icon">▶</span>
                    <span className="count">1</span>
                  </div>
                  <span className="issue-date">Jun 26</span>
                </div>

                <div className="issue-item">
                  <input type="checkbox" className="issue-checkbox" />
                  <span className="issue-menu">⋯</span>
                  <span className="issue-id">ECM-15</span>
                  <span className="issue-title">Cleanup deprecated fields</span>
                  <div className="issue-status empty">○</div>
                  <div className="issue-tags">
                    <span className="tag blue">#CLU</span>
                  </div>
                  <div className="issue-meta">
                    <span className="play-icon">▶</span>
                    <span className="count">1</span>
                  </div>
                  <span className="issue-date">Jun 26</span>
                </div>

                <div className="issue-item">
                  <input type="checkbox" className="issue-checkbox" />
                  <span className="issue-menu">⋯</span>
                  <span className="issue-id">ECM-14</span>
                  <span className="issue-title">Authentication actions</span>
                  <div className="issue-status empty">○</div>
                  <div className="issue-tags">
                    <span className="tag blue">#CLU</span>
                  </div>
                  <div className="issue-meta">
                    <span className="play-icon">▶</span>
                    <span className="count">1</span>
                  </div>
                  <span className="issue-date">Jun 26</span>
                </div>

                <div className="issue-item">
                  <input type="checkbox" className="issue-checkbox" />
                  <span className="issue-menu">⋯</span>
                  <span className="issue-id">ECM-12</span>
                  <span className="issue-title">Walkway lighting</span>
                  <div className="issue-status empty">○</div>
                  <div className="issue-tags">
                    <span className="tag blue">#CLU</span>
                  </div>
                  <div className="issue-meta">
                    <span className="play-icon">▶</span>
                    <span className="count">1</span>
                  </div>
                  <span className="issue-date">Jun 26</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
