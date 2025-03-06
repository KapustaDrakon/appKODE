import axios from "axios";
import React from "react";

export default class GetRequest extends React.Component {
  _apiBase =
    "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464";

  async getResourse(url: string) {
    return await axios({
      method: "get",
      url: `${this._apiBase}${url}`,
      headers: { "Content-Type": "application/json" },
    });
  }

  async getUsersList(filter = "all") {
    const res = await this.getResourse(`/users?__example=${filter}`);
    return res;
  }
}
