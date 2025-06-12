const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001/api";

interface ApiResponse<T> {
  data: T;
  message?: string;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = localStorage.getItem("authToken");

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const result: ApiResponse<T> = await response.json();
      return result.data;
    } catch (error) {
      console.error("API Request failed:", error);
      throw error;
    }
  }

  // Auth API
  async login(username: string, password: string) {
    return this.request<{ user: any; token: string }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
  }

  async logout() {
    return this.request("/auth/logout", {
      method: "POST",
    });
  }

  // News API
  async getNews() {
    return this.request<any[]>("/news");
  }

  async createNews(news: any) {
    return this.request<any>("/news", {
      method: "POST",
      body: JSON.stringify(news),
    });
  }

  async updateNews(id: string, news: any) {
    return this.request<any>(`/news/${id}`, {
      method: "PUT",
      body: JSON.stringify(news),
    });
  }

  async deleteNews(id: string) {
    return this.request(`/news/${id}`, {
      method: "DELETE",
    });
  }

  // Schedule API
  async getSchedule() {
    return this.request<any[]>("/schedule");
  }

  async createScheduleItem(item: any) {
    return this.request<any>("/schedule", {
      method: "POST",
      body: JSON.stringify(item),
    });
  }

  async updateScheduleItem(id: string, item: any) {
    return this.request<any>(`/schedule/${id}`, {
      method: "PUT",
      body: JSON.stringify(item),
    });
  }

  async deleteScheduleItem(id: string) {
    return this.request(`/schedule/${id}`, {
      method: "DELETE",
    });
  }

  // Trainers API
  async getTrainers() {
    return this.request<any[]>("/trainers");
  }

  async createTrainer(trainer: any) {
    return this.request<any>("/trainers", {
      method: "POST",
      body: JSON.stringify(trainer),
    });
  }

  async updateTrainer(id: string, trainer: any) {
    return this.request<any>(`/trainers/${id}`, {
      method: "PUT",
      body: JSON.stringify(trainer),
    });
  }

  async deleteTrainer(id: string) {
    return this.request(`/trainers/${id}`, {
      method: "DELETE",
    });
  }

  // Subscriptions API
  async getSubscriptions() {
    return this.request<any[]>("/subscriptions");
  }

  async createSubscription(subscription: any) {
    return this.request<any>("/subscriptions", {
      method: "POST",
      body: JSON.stringify(subscription),
    });
  }

  async updateSubscription(id: string, subscription: any) {
    return this.request<any>(`/subscriptions/${id}`, {
      method: "PUT",
      body: JSON.stringify(subscription),
    });
  }

  async deleteSubscription(id: string) {
    return this.request(`/subscriptions/${id}`, {
      method: "DELETE",
    });
  }
}

export const apiService = new ApiService();
