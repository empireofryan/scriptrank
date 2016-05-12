module Api
  module V1
    class ScriptsController < ApplicationController

      def index
        # @scripts = Script.all.to_json
        respond_with(Script.all.order("votes DESC"))
      end

      def show
        
      end

      def create
        byebug;0
        script = Script.new(script_params)
        if script.save
          respond_to do |format|
            format.json { render :json => script}
          end
        else
          render :json => { :errors => script.errors.full_messages }, :status => 422
        end
      end

      def update
      end

      def destroy
      end

    end
  end
end
