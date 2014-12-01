class CommentsController < ApplicationController
	def new
		@comment = Comment.new
	end
	
	def create
		@comment = Comment.new(comment_params)
 
		if @comment.save
			redirect_to @comment
		else
			render 'new'
  end
  	end

  	def show
	  	@comment = Comment.find(params[:id])
	end

	def index
	  	@comments = Comment.all
	end

  	private
	  def comment_params
	    params.require(:comment).permit(:commenter, :body)
	  end
end
