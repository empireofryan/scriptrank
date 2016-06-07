module Api
  module V1
    class CommentsController < ApplicationController

      def new
        @comment = Comment.new
      end

      def create
        @comment = Comment.new(comment_params)
        if @comment.save
          respond_to do |f|
            f.json { render json: @comment, serializer: CommentSerializer }
          end
        end
      end

      private

      def comment_params
        params.require(:comment).permit(:user_id, :script_id, :description)
      end
    end
  end
end
