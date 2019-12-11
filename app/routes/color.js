import Route from "@ember/routing/route";

export default class ColorRoute extends Route {
  async model(params) {
    let response = await fetch(`/api/colors/${params.color_id}.json`);
    let { data } = await response.json();
    let { id, attributes } = data;

    return { id, ...attributes };
  }
}
