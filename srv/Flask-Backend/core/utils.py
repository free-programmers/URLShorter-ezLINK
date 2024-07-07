import uuid
import datetime
import string
import random
from urllib.parse import urlparse as url_parse
from celery import Celery, Task
from flask import Flask, current_app, request, session
from werkzeug.utils import secure_filename as werkzeug_secure_filename

SysRandom = random.SystemRandom()


def generate_random_string(length: int = 6, punctuation: bool = True) -> str:
    """generate random strings

     params:
        length: int  = length of random string - default is 6
        punctuation: bool = punctuation in random string or not

     return:
        str: string: random string
     """
    letters = string.ascii_letters
    if punctuation:
        letters += string.punctuation
    random_string = SysRandom.choices(letters, k=length)

    return "".join(random_string)


def get_next_page(fall_back_url: str = '') -> str:
    """
    use this method for validating next params in url
    validate http url args next=some url
    """
    next_page = request.args.get("next", False)
    if not next_page or url_parse(next_page).netloc != "":
        next_page = fall_back_url

    return next_page



def make_file_name_secure(name: str, round:int=3):
    """This function make sure a file name is secure
    remove dangerous characters and add  uuid to first of file name
    """
    name = name.replace(" ", "")
    name = werkzeug_secure_filename(name)
    return f"{''.join([uuid.uuid4().hex for _ in range(round)])}-{datetime.datetime.utcnow().date()}-{name}"


def celery_init_app(app: Flask) -> Celery:
    class FlaskTask(Task):
        """Every time a task is added to queue
         __call__ ...
        """

        def __call__(self, *args: object, **kwargs: object) -> object:
            with app.app_context():
                return self.run(*args, **kwargs)

    celery_app = Celery(app.name, task_cls=FlaskTask)
    celery_app.config_from_object(app.config["CELERY"])
    celery_app.Task = FlaskTask
    celery_app.set_default()
    app.extensions["celery"] = celery_app
    return celery_app

