function call (command) {
    switch (command) {
        case "upvote":
            this.upvotes++;
            return "";
        
        case "downvote":
            this.downvotes++;
            return "";

        case "score":
            let score = this.upvotes - this.downvotes;
            
            let totalVotes = this.upvotes + this.downvotes;
            let rating = "";
            if (totalVotes < 10) {
                rating = "new";
            } else if (((this.upvotes * 100) / totalVotes) > 66) {
                rating = "hot";
            } else if (score >= 0 && (this.upvotes > 100 || this.downvotes > 100)) {
                rating = "controversial";
            } else if (score < 0) {
                rating = "unpopular";
            } else {
                rating = "new";
            }
            
            let addition = this.upvotes > this.downvotes 
                        ? Math.ceil(this.upvotes / 4)  
                        : Math.ceil(this.downvotes / 4);

            let upvotes = this.upvotes;
            let downvotes = this.downvotes;            
            if ((upvotes + downvotes) > 50) {
                upvotes += addition;
                downvotes += addition;
            }

            return [upvotes, downvotes, score, rating];
    }
};