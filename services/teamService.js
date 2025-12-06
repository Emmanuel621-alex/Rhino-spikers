export default class TeamService {
  static async getTeamData() {
    try {
      // In a real app, this would be an actual API endpoint
      // For demo purposes, we'll use a mock response
      const response = await new Promise(resolve => {
        setTimeout(() => {
          resolve({
            data: {
              roster: [
                {
                  id: 1,
                  name: "John Kwaks",
position: "Head Coach",
                  yearsExperience: 15,
                  image: "https://huggingface.co/spaces/EDACHE/rhino-spikers-volleyball-club/resolve/main/images/WhatsApp%20Image%202025-12-04%20at%2014.38.42_9d3bf2de.jpg"
},
                {
                  id: 2,
                  name: "Sarah Williams",
                  position: "Assistant Coach",
                  yearsExperience: 8,
                  image: "http://static.photos/people/200x200/12"
                },
                // Additional team members...
              ],
              achievements: [
                { id: 1, title: "City Champions", year: "2023" },
                { id: 2, title: "Regional Finals", year: "2022" },
                { id: 3, title: "MVP Awards", year: "2023" }
              ]
            }
          });
        }, 1000); // Simulate network delay
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching team data:", error);
      throw error;
    }
  }
}