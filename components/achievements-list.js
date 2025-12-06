export default class AchievementsList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    try {
      const teamData = await TeamService.getTeamData();
      this.render(teamData.achievements);
    } catch (error) {
      this.renderError();
    }
  }

  render(achievements) {
    this.shadowRoot.innerHTML = `
        ${achievements.map(achievement => `
          <div class="achievement-item">
            <div class="achievement-title">${achievement.title}</div>
            <div class="achievement-year">${achievement.year}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderError() {
    this.shadowRoot.innerHTML = `
      <div class="error-message">
        Failed to load achievements. Please try again later.
      </div>
    `;
  }
}

customElements.define('achievements-list', AchievementsList);