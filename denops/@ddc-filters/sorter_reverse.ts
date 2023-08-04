import { BaseFilter, Item } from "https://deno.land/x/ddc_vim@v3.9.0/types.ts";
import { FilterArguments } from "https://deno.land/x/ddc_vim@v3.9.0/base/filter.ts";

type Params = { [key: string]: never };

export class Filter extends BaseFilter<Params> {
  override filter({ items }: FilterArguments<Params>): Promise<Item[]> {
    return Promise.resolve([...items].reverse());
  }
  override params(): Params {
    return {};
  }
}
