class CommentsController < ApplicationController

	def new
		@comment = Comment.new
		render :layout => false
	end
	
	def create
		@comment = Comment.new(comment_params)
		respond_to do |format|
			if @comment.save
			  format.html { redirect_to @comment, notice: 'User was successfully created.' }
			  format.js   {}
			  format.json { render json: @comment, status: :created, location: @comment }
			else
			  format.html { render action: "new" }
			  format.json { render json: @comment.errors, status: :unprocessable_entity }
			end
		end
  	end

  	def show
	  	@comment = Comment.find(params[:id])
		render :layout => false
	end

	def index
	  	@comments = Comment.all
	end

  	private
	  def comment_params
	    params.require(:comment).permit(:commenter, :body)
	  end
end
