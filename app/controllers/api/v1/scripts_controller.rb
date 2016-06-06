module Api
  module V1
    class ScriptsController < ApplicationController

      before_action :authenticate_user!, except: [:index, :show]
      before_action :set_script, only: [:upvote, :update, :destroy]

      def index
        @scripts = Script.where(genre_id: params[:genre_id]) if params.key?(:genre_id)
        @scripts ||= Script.all

        render json: {scripts: @scripts}
      end

      def new
        @script = current_user.scripts.build
        1.times { @script.comments.build }
        if params["genre_id"].present?
          @genre_list = Genre.find([params["genre_id"]])
        else
          @genre_list = Genre.all
        end

      end

      def show
        @script = Script.includes(:genre).find(params[:id])
        respond_to do |f|
          f.html { render :show }
          f.json { render json: @script }
        end
      end

      def create
        @script = current_user.scripts.build(script_params)
        # @script.comments do |comment|
        #   comment.user = current_user
        #   current_user.comments << comment
        #   comment.save
        # end
        if @script.save
          @comment = @script.comments.build(user: current_user, description: params[:comment])
          @comment.save
          flash[:success] = "Your event was successfully created!"
          render json: {message: "Your script has been created" }
        else
          render :new
          1.times { @script.comments.build }
        end
      end

      def update
        if @script.update(script_params)
          @script.save
          redirect_to genre_scripts_path(@script)
        else
          render :new
        end
      end

      def destroy
        @script.destroy
        flash[:notice] = "Script deleted"
        redirect_to genre_scripts_path(@script.genre)
      end

      def upvote
        @script.liked_by current_user

        render json: { message: "You have liked the script" }
      end

      private

      def set_script
        @script = Script.find(params[:id])
      end

      def script_params
        params.require(:script).permit(:user_id, :author, :title, :logline, :genre_id, comments_attributes: [:description, :user_id])
      end

      def genre_params
        params.require(:genre).permit(:genre_id)
      end

      def comment_params
       params.require(:script).permit(comments_attributes: [:description, :user_id])
      end
    end
  end
end
