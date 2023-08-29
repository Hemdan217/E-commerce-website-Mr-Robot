class ApiFeatures {
  constructor(mongooseQuery, reqestQuery) {
    this.reqestQuery = reqestQuery;
    this.mongooseQuery = mongooseQuery;
  }

  // 1)Filtering => price[gte]=50
  filter() {
    let queryObj = { ...this.reqestQuery };
    // ?page,limit,sort,fields
    let exclues = ["page", "limit", "sort", "fields"];
    exclues.forEach((f) => delete queryObj[f]);
    let queryStr = JSON.stringify(queryObj);
    // Apply filtering using [gte, gt, lte, lt]
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    queryStr = JSON.parse(queryStr);
    // console.log(queryStr);
    this.mongooseQuery = this.mongooseQuery.find(queryStr);
    return this;
  }

  // 2)sorting ?sort=price,rating => price rating
  sort() {
    if (this.reqestQuery.sort) {
      let sortBy = this.reqestQuery.sort.split(",").join(" ");
      this.mongooseQuery = this.mongooseQuery.sort(sortBy);
    } else {
      this.mongooseQuery = this.mongooseQuery.sort("createdAt");
    }
    return this;
  }

  // 3)Limiting Fileld ?fileds=price,

  limitFields() {
    if (this.reqestQuery.fields) {
      this.mongooseQuery = this.mongooseQuery.select(
        this.reqestQuery.fields.split(",").join(" ")
      );
    } else {
      this.mongooseQuery = this.mongooseQuery.select("-__v");
    }
    return this;
  }
  // 4)Search ?keyword=jacket
  search() {
    if (this.reqestQuery.keyword) {
      let query = {};
      let searchWord = this.reqestQuery.keyword;
      query.$or = [
        { title: { $regex: searchWord, $options: "i" } },
        { description: { $regex: searchWord, $options: "i" } },
      ];
      console.log(query);
      console.log(this.reqestQuery.keyword);
      this.mongooseQuery = this.mongooseQuery.find(query);
    }
    return this;
  }

  // 5) paginate ?page=1,limit=10

  paginate(countDocuments) {
    let page = this.reqestQuery.page * 1 || 1;
    const limit = this.reqestQuery.limit * 1 || 50;

    // Pagination result
    const pagination = {};

    pagination.numberOfPages = Math.ceil(countDocuments / limit);

    if (page > pagination.numberOfPages) {
      page = pagination.numberOfPages;
    }
    const skip = (page - 1) * limit;
    const endIndex = page * limit;
    pagination.currentPage = page;
    pagination.limit = limit;

    // next page
    if (endIndex < countDocuments) {
      pagination.next = page + 1;
    }
    if (skip > 0) {
      pagination.prev = page - 1;
    }
    this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);

    this.paginationResult = pagination;
    return this;
  }
}
export default ApiFeatures;
